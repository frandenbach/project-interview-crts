import { ColumnDef } from '@tanstack/react-table'

export type User = {
    id: string
    name: string
    email: string
    accessLevel: string
    password: string
  }
  
  export const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Nome"
    },
    {
      accessorKey: "email",
      header: "Email"
    },
    {
      accessorKey: "accessLevel",
      header: "Nível de Acesso"
    }
  ]