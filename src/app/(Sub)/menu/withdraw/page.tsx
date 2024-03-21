'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import Header from '@/components/Header';
import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { withdrawReasonList } from '@/constants/data';

export default function Page() {
  const [withdrawalReason, setWithdrawalReason] = useState<string>();
  const [etc, setEtc] = useState(false);
  const { open } = useOverlay();
  const router = useRouter();

  function handleWithdraw() {
    open(({ exit }) => (
      <Popup
        title="정말 탈퇴하시겠어요?"
        content={`탈퇴 시 업로드한 포즈를 제외한\n모든 정보가 삭제되며 복구되지 않아요.`}
      >
        <>
          <PrimaryButton onClick={exit} text="취소" />
          <PrimaryButton
            text="탈퇴"
            onClick={() => router.replace(`/auth/withdraw?reason=${withdrawalReason}`)}
          />
        </>
      </Popup>
    ));
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
        <form>
          {withdrawReasonList.map((item, idx) => (
            <div
              key={idx}
              className="py-16"
              onClick={() => {
                setWithdrawalReason(item);
                setEtc(false);
              }}
            >
              {item === withdrawalReason && <span>wow</span>}
              <label className="ml-8">{item}</label>
            </div>
          ))}
          <div
            className="py-16"
            onClick={() => {
              setEtc(true);
              setWithdrawalReason(undefined);
            }}
          >
            <label className="ml-8">기타</label>
          </div>
        </form>
        {etc && (
          <textarea
            className="border-border-default outline-border-active"
            onChange={(e) => setWithdrawalReason(e.target.value)}
            value={withdrawalReason}
            placeholder="떠나시는 이유를 알려주세요"
          />
        )}
      </div>
      <BottomFixedDiv>
        <PrimaryButton text="계속 쓸래요" type="outline" onClick={() => router.back()} />
        {withdrawalReason ? (
          <PrimaryButton text="탈퇴할래요" type="fill" onClick={handleWithdraw} />
        ) : (
          <PrimaryButton text="탈퇴할래요" type="secondary" />
        )}
      </BottomFixedDiv>
    </>
  );
}
