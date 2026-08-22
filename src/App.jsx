import { useState } from 'react'
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Chip,
  TextField,
  Divider,
  Paper,
} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={5}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            valgen design system
          </Typography>
          <Typography variant="h1">Design tokens, wired up</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            This MUI theme is generated from the Figma tokens synced into{' '}
            <code>valgentokens.json</code> — palette, typography, and shape all read
            from the token file at build time.
          </Typography>
        </Box>

        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Typography scale
          </Typography>
          <Stack spacing={1}>
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="h3">H3 Heading</Typography>
            <Typography variant="h4">H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="body1">
              Body 1 — the quick brown fox jumps over the lazy dog.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body 2 — secondary text color from formElements.content.secondaryTextColor.
            </Typography>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Actions
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained" color="primary" onClick={() => setCount((c) => c + 1)}>
              Count is {count}
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Inputs &amp; chips
          </Typography>
          <Stack spacing={2}>
            <TextField label="Label" placeholder="Type something" size="small" />
            <Stack direction="row" spacing={1}>
              <Chip label="Primary" color="primary" />
              <Chip label="Error" color="error" variant="outlined" />
              <Chip label="Warning" color="warning" variant="outlined" />
              <Chip label="Success" color="success" variant="outlined" />
            </Stack>
          </Stack>
        </Paper>

        <Divider />
        <Typography variant="caption" color="text.secondary">
          Built with React, Vite, and MUI — theme sourced from Figma via Tokens Studio.
        </Typography>
      </Stack>
    </Container>
  )
}

export default App
