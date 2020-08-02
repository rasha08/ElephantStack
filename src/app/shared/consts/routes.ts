export type Routes = {
  app: {
    home: string;
  };
  user: {
    list: string;
    create: string;
    edit: string;
  };
};

export const appRoutes: Routes = {
  app: {
    home: '',
  },
  user: {
    list: '',
    create: 'create',
    edit: ':id/edit',
  },
};
