import { Role } from '../../../../shared/enums/Role';

export type TableFilter = {
  query: string;
  role: Role | null;
};
