import { App } from '@app/App';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@shared/ui';

import '@shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
