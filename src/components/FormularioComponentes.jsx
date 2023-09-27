import { useForm } from "../Hooks/useForm";

export const FormularioComponentes = () => {
    const inicialForm ={    
        userName: '',
        email: '',
        password: ''
    }
    const{formState, onInputChange}= useForm(inicialForm)

    const { userName, email, password } = formState;

    const onSubmit =(event) =>{
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter Username"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
};
