import React, { useReducer } from 'react';
// Note how now our initialState has keys nested 2 levels deep
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
    hasBeenSubmitted: false
};

// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME_VALUE":
            return {
                ...state,
                firstName: {
                    // we have to add this or it would wipe out any existing value for state.email.error
                    ...state.firstName,  
                    value: action.payload
                }
            }
        case "SET_FIRSTNAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    error: action.payload
                }
            }
        case "SET_LASTNAME_VALUE":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload
                }
            }
        case "SET_LASTNAME_ERROR":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    error: action.payload
                }
            }
            case "SET_EMAIL_VALUE":
                return {
                    ...state,
                    email: {
                        ...state.email,
                        value: action.payload
                    }
                }      
            case "SET_EMAIL_ERROR":
            return {
                ...state,
                email: {
                    ...state.email,
                    error: action.payload
                }
            }        
        case "SET_SUBMITTED_BOOLEAN":
            return {
                ...state,
                hasBeenSubmitted: action.payload
            }
        default:
            return state;
    }
}
 
    const Form = () => {
    //  We call the useReducer function. and feed it the reducer function and initialState.
    //  This function will return an array with a state variable ("state") which will hold 
    //  the CURRENT value of our app's state, and the dispatch fn ("dispatch") which
    //  will dispatch our action to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const handleFirstNameChange = (e) => {
        // if length of input value (e.target.value) is less than 2, dispatch action to set FIRSTNAME error
        const value = e.target.value;
        // Regardless of what the length of input is, we still need to dispatch an action to update 
        // state.LASTNAME.value with current value of LASTNAME input
        dispatch({
            type: "SET_FIRSTNAME_VALUE",
            payload: value
        })
        /////////////////////// first methode
        if (value.length < 2) { 
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "First Name must be at least 2 characters"
            });
        } else {
            // if length of input value is >= 2, the else block will be hit and we will dispatch action to set FIRSTNAME 
            // value back to empty string
            dispatch({
                type: "SET_FIRSTNAME_ERROR", 
                payload: null
            });
        }
}
    
    const handleLastNameChange = (e) => {
        const value = e.target.value; 
        // Regardless of what the length of input is, we still need to dispatch an action to update 
        // state.LASTNAME.value with current value of LASTNAME input
        dispatch({
            type: "SET_LASTNAME_VALUE",
            payload: value
        })
        /////////////////////// second methode
        // Reset error only if the form has been submitted
        if (state.hasBeenSubmitted) {
            dispatch({
                type: 'SET_LASTNAME_ERROR',
                payload: value.length < 2 ? 'Last Name must be at least 2 characters' : null
            });
        }
    }
    
    
    
    const handleEmailChange = (e) => {
        const value = e.target.value;
        // Regardless of what the length of the input is, we still need to dispatch an action to update 
        // state.email.value with current value of email input
        dispatch({
            type: "SET_EMAIL_VALUE", 
            payload: value
        });
        // Reset error only if the form has been submitted
        if (state.hasBeenSubmitted) {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: value.length < 5 ? 'Email must be at least 5 characters' : null
            });
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check for errors in input values and update error states
        const firstNameError = state.firstName.value.length < 2 ? 'First Name must be at least 2 characters' : null;
        const lastNameError = state.lastName.value.length < 2 ? 'Last Name must be at least 2 characters' : null;
        const emailError = state.email.value.length < 5 ? 'Email must be at least 5 characters' : null;
    
        dispatch({
            type: 'SET_FIRSTNAME_ERROR',
            payload:  firstNameError
        });
    
        dispatch({
            type: 'SET_LASTNAME_ERROR',
            payload: lastNameError
        });
    
        dispatch({
            type: 'SET_EMAIL_ERROR',
            payload: emailError
        });
    
        // Check if there are any errors
        if (!firstNameError && !lastNameError && !emailError) {
            // If no errors, dispatch action to set setSubmittedBoolean to true, indicating successful form submission
            dispatch({
                type: 'SET_SUBMITTED_BOOLEAN',
                payload: true
            });
        }
        dispatch({
            type: 'SET_FIRSTNAME_VALUE',
            payload:  ""
        });
        dispatch({
            type: 'SET_LASTNAME_VALUE',
            payload: ""
        });
        dispatch({
            type: 'SET_EMAIL_VALUE',
            payload: ""
        });
    }
 
    return (
        <div>

            {/* If state.hasBeenSubmitted === true, display some text telling user */}
            {state.hasBeenSubmitted ? <h3>Form has been submitted!</h3> : null} 


            <form onSubmit={handleSubmit}>
                <div>

                { state.firstName.error ?  <p>{state.firstName.error}</p> : null }

                    <label htmlFor="firstName">firstName</label>
                    <input
                        id="firstName"
                        type='text'
                        value={state.firstName.value}
                        onChange={(e) => handleFirstNameChange(e)} 
                    />
                </div>
                <div>

                    { state.lastName.error ?  <p>{state.lastName.error}</p> : null }

                    <label htmlFor="lastName">lastName</label>
                    <input
                        id="lastName"
                        type='text'
                        value={state.lastName.value}
                        onChange={(e) => handleLastNameChange(e)} 
                    />
                </div>
                <div>
                { state.email.error ?  <p>{state.email.error}</p> : null }
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type='email'
                        value={state.email.value}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <h1>{JSON.stringify(state)}</h1>
        </div>
    );
}

export default Form;


