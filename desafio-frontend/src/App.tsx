import { DataTable } from './pages/app/data-table'
import { User, columns } from './pages/app/columns'

async function getData(): Promise<User> {
  return [
    {
      id: '2992992',
      name: 'Fulano da Silva',
      email: 'fulano@email.com',
      accessLevel: '5',
      password: '123456'
    }
  ]
}

export default async function App() {
  const data = await getData()

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}