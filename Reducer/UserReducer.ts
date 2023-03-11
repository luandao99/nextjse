
interface initialState {
  email: string,  password:string,
};
export const initialStateData:initialState= {
  email:'',
  password:''
}
export const reducer = (state: string, action: initialState) => {
  console.log("-----------", action.payload.email);
  switch (action.type) {
    case "UPDATE_USER":
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
