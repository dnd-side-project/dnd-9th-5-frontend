'use client';

import { useState } from 'react';

import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import Header from '@/components/Header';
import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { withdrawReasonList } from '@/constants/data';

export default function Page() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isEtcSelected, setIsEtcSelected] = useState(false);
  const [etc, setEtc] = useState<string>('');
  const { open } = useOverlay();

  function handleSelectChange(e: any) {
    setIsButtonActive(true);
    setIsEtcSelected(e.target?.id === 'etc');
  }

  function handleEtcTextarea(e: any) {
    setEtc(e.target.value);
  }

  return (
    <>
      <Header title="서비스 탈퇴" close={true} />
      <div className="px-20">
        <h4 className="py-40 text-center">
          떠나시는 <span className="text-main-violet-dark">이유를</span>
          <br />
          알려줄 수 있나요?
        </h4>
        <form onChange={(e) => handleSelectChange(e)}>
          {withdrawReasonList.map((item, idx) => (
            <div key={idx} className="py-16">
              <input type="radio" value={item} name="withdrawalReason" />
              <label className="ml-8">{item}</label>
            </div>
          ))}
          <div className="py-16">
            <input type="radio" value={etc} name="withdrawalReason" id="etc" />
            <label className="ml-8">기타</label>
          </div>
          <BottomFixedDiv>
            <PrimaryButton text="계속 쓸래요" type="outline" />
            {isButtonActive ? (
              <PrimaryButton
                text="탈퇴할래요"
                type="fill"
                onClick={() =>
                  open(({ exit }) => (
                    <Popup
                      title="정말 탈퇴하시겠어요?"
                      content={`탈퇴 시 업로드한 포즈를 제외한\n모든 정보가 삭제되며 복구되지 않아요.`}
                    >
                      <>
                        <PrimaryButton onClick={exit} text="취소" />
                        <PrimaryButton buttonType="submit" text="탈퇴" />
                      </>
                    </Popup>
                  ))
                }
              />
            ) : (
              <PrimaryButton text="탈퇴할래요" type="secondary" />
            )}
          </BottomFixedDiv>
        </form>
        {isEtcSelected && (
          <textarea
            className="border-border-default outline-border-active"
            onChange={(e) => handleEtcTextarea(e)}
            value={etc}
            placeholder="떠나시는 이유를 알려주세요"
          />
        )}
      </div>
    </>
  );
}
