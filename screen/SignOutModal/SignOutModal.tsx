import { Button } from '@/components/Button/Button';
import { ModalContent } from '@/components/ModalContent/ModalContent';
import { resetAuth } from '@/store/slices/auth';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {}

function SignOutModal({}: Props) {
  const dispatch = useDispatch();

  const signOut = () => dispatch(resetAuth());

  return (
    <ModalContent>
      <Button onPress={signOut} title='SIGN OUT' />
    </ModalContent>
  );
}

export { SignOutModal };
