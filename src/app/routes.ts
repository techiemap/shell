import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'suppliers',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.supplierHost+ '/remoteEntry.js',
        exposedModule: './SuppliersModule',
      }).then((m) => m.SuppliersModule).catch((reason)=> {
        alert(reason);
      }),
  },
  {
    path: 'requisition',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.requisitionHost+ '/remoteEntry.js',
        exposedModule: './RequisitionModule',
      }).then((m) => m.RequisitionModule).catch((reason)=> {
        alert(reason);
      }),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
