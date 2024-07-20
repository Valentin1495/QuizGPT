import { Msg } from '@/lib/types';
import { cn } from '@/lib/utils';
// import UserAvatar from './user-avatar';
import BotAvatar from './bot-avatar';
import CopyButton from './copy-button';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

type ChatListProps = {
  chatHistory: Msg[];
  pending: boolean;
  profilePic: string;
};

export default function ChatList({
  chatHistory,
  pending,
}: // profilePic,
ChatListProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      {chatHistory.map((el, idx) => (
        <div
          key={idx}
          className={cn(
            'w-full flex gap-x-3 rounded-xl',
            el.role === 'user'
              ? 'p-8 bg-primary-foreground w-2/3 ml-auto'
              : 'pb-1 mt-8'
          )}
        >
          {el.role === 'model' && <BotAvatar />}
          {el.role === 'model' ? (
            <section className='group'>
              <p
                className={cn(
                  'font-sans whitespace-pre-wrap mb-1 leading-8',
                  quicksand.variable
                )}
              >
                {el.parts}
                {idx === chatHistory.length - 1 && pending && (
                  <span className='cursor-default animate-pulse'>▍</span>
                )}
              </p>

              <CopyButton
                message={el.parts}
                isLast={idx === chatHistory.length - 1 && !pending}
              />
            </section>
          ) : (
            <section>
              <p
                className={cn(
                  'whitespace-pre-wrap font-sans',
                  quicksand.variable
                )}
              >
                {el.parts}
              </p>
            </section>
          )}
        </div>
      ))}
    </div>
  );
}
