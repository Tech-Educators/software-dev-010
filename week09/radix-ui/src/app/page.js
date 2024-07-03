import * as Popover from '@radix-ui/react-popover';
import AccordionDemo from '@/component/Accordian';

export default function Page() {

  const userInfo = {
    name: 'Sam'
  }
  return (
    <div>
      <Popover.Root className="bg-orange-700">
        <Popover.Trigger className="bg-orange-700">Show a cool surprise...</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
          [̲̅$̲̅(̲̅ιο̲̅̅)̲̅$̲̅]
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <AccordionDemo userName={userInfo.name}/>
    </div>
  )
}