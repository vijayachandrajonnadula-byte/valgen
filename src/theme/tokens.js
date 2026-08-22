import rawTokens from '../../valgentokens.json'

const RESERVED_KEYS = new Set(['$themes', '$metadata'])
const ALIAS_PATTERN = /^\{([^}]+)\}$/

const isTokenLeaf = (node) =>
  node !== null && typeof node === 'object' && 'value' in node && 'type' in node

function flatten(node, path, out) {
  if (isTokenLeaf(node)) {
    out[path.join('.')] = node.value
    return
  }
  if (node !== null && typeof node === 'object') {
    for (const key of Object.keys(node)) {
      flatten(node[key], [...path, key], out)
    }
  }
}

// Merge every token set in tokenSetOrder into one path -> raw value map.
// A later set wins on key collisions, mirroring how Tokens Studio itself
// resolves references across multiple enabled sets.
const setOrder =
  rawTokens.$metadata?.tokenSetOrder ??
  Object.keys(rawTokens).filter((key) => !RESERVED_KEYS.has(key))

const merged = {}
for (const setName of setOrder) {
  const set = rawTokens[setName]
  if (set) flatten(set, [], merged)
}

function resolveValue(value, seen) {
  if (typeof value !== 'string') return value
  const match = value.match(ALIAS_PATTERN)
  if (!match) return value

  const refPath = match[1]
  if (seen.has(refPath)) {
    throw new Error(`Circular token reference detected at {${refPath}}`)
  }
  const refValue = merged[refPath]
  if (refValue === undefined) {
    console.warn(`[tokens] Unresolved reference {${refPath}}`)
    return value
  }
  seen.add(refPath)
  return resolveValue(refValue, seen)
}

export const tokens = Object.fromEntries(
  Object.entries(merged).map(([path, value]) => [path, resolveValue(value, new Set())]),
)

export function token(path, fallback) {
  if (!(path in tokens)) {
    console.warn(`[tokens] Missing token: ${path}`)
    return fallback
  }
  return tokens[path]
}
