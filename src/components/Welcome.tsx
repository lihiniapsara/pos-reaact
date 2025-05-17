interface WelcomeProps {
    name?: string
    age: number
    isStudent?: boolean
    isVerified: boolean
    isLogged: boolean
}

const Welcome =
    ({name = "No name", age, isStudent, isVerified, isLogged}: WelcomeProps) => {

    console.log('is student: ', isStudent)

    return (
        <div>
            <h1>Welcome {name}</h1>
            <h2>Age: {age}</h2>
            <h2> {isStudent ? 'Student' : 'Not student'}</h2>
            {isVerified && <h2>✅</h2>}
            {isLogged && <button>Logout</button>}
            {!isLogged && <button>Login</button>}
            // conditional rendering
            {isLogged ? <button>Logout</button> : <button>Login</button>}

        </div>

    )
}

export default Welcome;