'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Popup, WITHDRAW_REASON_LIST, useOverlay } from '@/shared';
import { Header } from '@/widgets';

const RadioInput = ({ checked }: { checked: boolean }) => {
  return checked ? (
    <input type="radio" checked name="reason" className="accent-brand" />
  ) : (
    <input type="radio" name="reason" />
  );
};

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
          <Button onClick={exit} text="취소" variant="secondary" />
          <Button
            text="탈퇴"
            onClick={() => router.replace(`/auth/withdraw?reason=${withdrawalReason}`)}
            variant="warning"
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
          {WITHDRAW_REASON_LIST.map((item, idx) => (
            <div
              key={idx}
              className="py-16"
              onClick={() => {
                setWithdrawalReason(item);
                setEtc(false);
              }}
            >
              <RadioInput checked={item === withdrawalReason} />
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
            <RadioInput checked={etc} />
            <label className="ml-8">기타</label>
          </div>
        </form>
        {etc && (
          <textarea
            className="w-full rounded-8 border-2 border-solid border-border-disabled p-16 outline-icon-disabled"
            onChange={(e) => setWithdrawalReason(e.target.value)}
            value={withdrawalReason}
            placeholder="이유를 알려주세요"
          />
        )}
      </div>
      <MainFooter>
        <Button text="계속 쓸래요" variant="outline" onClick={() => router.back()} />
        {withdrawalReason ? (
          <Button text="탈퇴할래요" variant="fill" onClick={handleWithdraw} />
        ) : (
          <Button text="탈퇴할래요" variant="secondary" />
        )}
      </MainFooter>
    </>
  );
}
