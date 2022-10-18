import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  NewspaperIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import SiderbarRow from './SiderbarRow'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import logo from '../images/logo-twitter-icon.png'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <Image className="relative m-3 h-5 w-5" src={logo} alt="" />

      <SiderbarRow Icon={HomeIcon} title="Home" />
      <SiderbarRow Icon={HashtagIcon} title="Explore" />
      <SiderbarRow Icon={BellIcon} title="Notifications" />
      <SiderbarRow Icon={EnvelopeIcon} title="Messages" />
      <SiderbarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SiderbarRow Icon={NewspaperIcon} title="Lists" />

      <SiderbarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sign out' : 'Sign in'}
      />
      <SiderbarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  )
}

export default Sidebar
