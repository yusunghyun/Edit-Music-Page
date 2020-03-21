import React from 'react';
import Button from './common/Button'


const PasswordModal = ({isModal,modalCloseAction,modalOpenAction,editPasswordAsync}) => {
  const [value,setValue] = React.useState()

  return (
    <React.Fragment>
   	  {
        isModal ?
        <React.Fragment>
        <div className="Modal-overlay" />
        <div className="Modal">
          <p className="title">비밀번호 변경</p>
          <div className="content">
            <form onSubmit={(e)=>{
              e.preventDefault();
              editPasswordAsync({id:localStorage.id,password:value})
              modalCloseAction()
              }}>
              <input
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              value={value}
              onChange={(e)=>{setValue(e.target.value)}}
              />
              <button type='submit'> 변경 </button>
            </form>
          </div>
          <div className="button-wrap">
            <p onClick={modalCloseAction}> 닫기 </p>
          </div>
        </div>
        </React.Fragment>
        : <Button onClick={modalOpenAction}>비밀번호변경</Button>
      }
    </React.Fragment>
  );
};

export default PasswordModal;