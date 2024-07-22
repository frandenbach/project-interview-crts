"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash2, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export type User = {
    id: string
    name: string
    email: string
    accessLevel: string
    password: string
}

const data: User[] = [
  {
    id: "123456789",
    name: "Robson",
    email: "rob99@yahoo.com",
    accessLevel: "5",
    password: "123456"
  },
  {
    id: "987654321",
    name: "Ronaldo",
    email: "naldo@yahoo.com",
    accessLevel: "5",
    password: "123456"
  },
  {
    id: "192837465",
    name: "Rafaela",
    email: "fafa9@yahoo.com",
    accessLevel: "5",
    password: "123456"
  }
]

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">Email</div>,
    cell: ({ row }) => <div className="text-center lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "accessLevel",
    header: () => <div className="text-center">Nível de Acesso</div>,
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("accessLevel")}</div>
    },
  },
  {
    id: "edit",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <Pencil className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Editar usuário</DialogTitle>
                <DialogDescription>
                    Modificar as informações do usuário. Aperte em salvar quando pronto.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nome
                    </Label>
                    <Input
                        id="name"
                        defaultValue="Pedro Ruas"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input
                        id="email"
                        defaultValue="pedro.ruas@gmail.com"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="accessLevel" className="text-right">
                        Nível de Acesso
                    </Label>
                    <Input
                        id="accessLevel"
                        defaultValue="5"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                        Senha
                    </Label>
                    <Input
                        id="password"
                        defaultValue="123456"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="confPassword" className="text-right">
                        Confirmar Senha
                    </Label>
                    <Input
                        id="confPassword"
                        defaultValue="123456"
                        className="col-span-3"
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    },
  },
  {
    id: "delete",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <Trash2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Deletar usuário</DialogTitle>
                <DialogDescription>
                    Você tem certeza?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button type="submit">Deletar</Button>
                <Button>Voltar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    },
  }
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnVisibility
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Label className="max-w-sm">
            Usuários
        </Label>
            <Button variant="outline" className="ml-auto">
              Adicionar Usuário
            </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
