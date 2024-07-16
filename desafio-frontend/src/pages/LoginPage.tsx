import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'

function LoginPage() {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Bem Vindo</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full max-w-sm items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' placeholder='exemplo@email.com' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='password'>Senha</Label>
                <Input type='password' id='password' placeholder='Senha' />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button>Login</Button>
        </CardFooter>
      </Card>
      </div>
    )
  }
  
  export default LoginPage