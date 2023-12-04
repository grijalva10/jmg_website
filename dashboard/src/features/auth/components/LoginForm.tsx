import { TextInput, PasswordInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFrappeAuth } from 'frappe-react-sdk';


  
  
export const LoginForm = () => {
  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },
  });
  const {
    currentUser,
    isValidating,
    isLoading,
    login,
    logout,
    error,
    updateCurrentUser,
    getUserCookie,
  } = useFrappeAuth();

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => login(values.login, values.password))}>
        <TextInput
          withAsterisk
          label="Login"
          placeholder="your@email.com"
          {...form.getInputProps('login')}
        />
        
            <PasswordInput
      placeholder="Password"
      label="Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk
      {...form.getInputProps('password')}
    />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default LoginForm;