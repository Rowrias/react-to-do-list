import Button from '../Button'
import { TextInput } from '../TextInput'
import './todo-form.style.css'

export function ToDoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className='todo-form'>
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                required
            />
            <Button>
                Salvar item
            </Button>
        </form>
    )
}
