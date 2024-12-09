import { useLoginUserMutation } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { setUser } from '@/store/slices/auth';
import { router } from 'expo-router';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

function SignIn() {
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const handleLogin = async () => {
    loginUser({ email: 'steverogers@strv.com', password: 'am3riCa' })
      .unwrap()
      .then((data) => {
        router.replace('/');
        dispatch(setUser(data));
      });
  };

  return (
    <Block align='center' hasFlexOne>
      <Button onPress={handleLogin} title='Sign In' />
    </Block>
  );
}

export default SignIn;
