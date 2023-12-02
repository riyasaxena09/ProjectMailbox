import { render,screen } from "@testing-library/react";
import SignUp from "./Signup";
import userEvent from "@testing-library/user-event";
describe('Welcome Component',()=>{
test('renders Welcome to the Expense Tracker as a text',()=>{
    render(<SignUp></SignUp>);
    const hello=screen.getByText('Password:');
    expect(hello).toBeInTheDocument();
});

});
