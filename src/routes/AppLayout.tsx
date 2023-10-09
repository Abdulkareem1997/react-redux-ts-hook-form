import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Layout from '../componants/Layout/Layout';

type ApplayoutProps = {
  children: React.ReactNode;
};

const AppLayout = (props: ApplayoutProps) => {
  const isAuth = useSelector((state: RootState) => state.userAuth.isAuth)

  return (
    <div>
      {isAuth ? <Layout>
        {props.children}
      </Layout> : <>
        {props.children}
      </>
      }
    </div>
  )
}

export default AppLayout