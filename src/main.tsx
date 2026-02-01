import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import { store } from './store/store';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './app/queryClinet';

import { EnvironmentProdider } from './providers/EnvironmentContext';
import { AuthProvider } from './providers/UserRoleContext';
import { UIProvider } from './providers/UIContext';
import { FeatureFlagsProvider } from './providers/FeatureFlagsContext';

import './index.css';

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    await worker.start({onUnhandledRequest: 'bypass'})
  }
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <FeatureFlagsProvider>
            <UIProvider>
              <EnvironmentProdider>
                <AuthProvider>
                  <RouterProvider router={router} />
                </AuthProvider>
              </EnvironmentProdider>
            </UIProvider>
          </FeatureFlagsProvider>
        </QueryClientProvider>
      </Provider>
    </StrictMode>,
  )
})
