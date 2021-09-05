import React, { useState } from 'react';
import '../../../../styles/sass/main.css';

const Modal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, onAccept, id } = props;

  const handleChangeInput = event => {
    //   console.log(event.target.value);
    setNickname(event.target.value);
  };

  const [nickname, setNickname] = useState('');
  const onChildClick = e => {
    e.stopPropagation();
  };
  if (id === 'out') {
    //로그아웃, 탈퇴
    return (
      <div onClick={close}>
        <div className={open ? 'openModal modal' : 'modal'}>
          <section onClick={onChildClick}>
            <header style={{ paddingLeft: '60px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={onAccept}>
                예
              </button>
              <span> </span>
              <button className="close" onClick={close}>
                아니오
              </button>
            </footer>
          </section>
        </div>
      </div>
    );
  } else {
    //닉네임, 프로필 사진 변경
    return (
      <div onClick={close}>
        <div className={open ? 'openModal modal' : 'modal'}>
          <section style={{ width: '300px', height: '195px' }} onClick={onChildClick}>
            <header style={{ paddingLeft: '60px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main id="modify">
              <input
                type="text"
                className="modal-input"
                placeholder={props.children}
                onChange={handleChangeInput}
                maxLength="8"
                autoFocus
              />
              {nickname.length > 1 ? (
                <div className="check-nickname">사용 가능한 닉네임입니다!</div>
              ) : (
                <div className="check-nickname">&nbsp;</div>
              )}
            </main>
            <footer style={{ padding: '2px 16px 12px 16px' }}>
              <button
                className="modify"
                onClick={nickname.length > 1 ? onAccept : null}
                id={nickname.length > 1 ? 'possible' : null}
              >
                완료
              </button>
            </footer>
          </section>
        </div>
      </div>
    );
  }
};

export default Modal;
