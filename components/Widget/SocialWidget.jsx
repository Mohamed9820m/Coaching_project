import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.instagram.com/coach_hany_oueslati/?hl=fr"  target="_blank" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://www.facebook.com/heni.oueslati" target="_blank" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href="https://www.instagram.com/hjar_team/?hl=fr"  target="_blank" className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />
      </Link>
    </Div>
  );
}
