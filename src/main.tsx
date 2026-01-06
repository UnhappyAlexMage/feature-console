import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import { store } from './store/store';

import { EnvironmentProdider } from './providers/EnvironmentContext';
import { AuthProvider } from './providers/UserRoleContext';
import { UIProvider } from './providers/UIContext';

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
        <UIProvider>
          <EnvironmentProdider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </EnvironmentProdider>
        </UIProvider>
      </Provider>
    </StrictMode>,
  )
})
