import Button from '../Button'
import { TextInput } from '../TextInput'
import './todo-form.style.css'

export function ToDoForm({ onSubmit, defaultValue }) {
    return (
        <form action={onSubmit} className='todo-form'>
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                name="description"
                defaultValue={defaultValue}
                required
            />
            <Button>
                Salvar item
            </Button>
        </form>
    )
}
