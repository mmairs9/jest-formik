import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('test the fake timer with formik', async () => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2023-02-18"));
  render(<App/>);


  //if we were to comment out this act block below then the test should pass - date seems to be resetting when the formik form is changed
  await act(async () => {
  const repeatsDropdown = (await waitFor(() => screen.getByText('Daily'))).parentElement
  expect(repeatsDropdown).toBeTruthy()
    userEvent.selectOptions(repeatsDropdown, 'yearly')
  })


  // :(
  expect(new Date().getFullYear()).toEqual(2023)
});
