//This imports React
import React from 'react'
//This imports the icons from heroicons
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
//This imports sidebarRow that I created
import SiderbarRow from './SiderbarRow'
//This imports the signIn signOut and useSession from next auth
import { signIn, signOut, useSession } from 'next-auth/react'
//This is declaring a function Siderbar
function Sidebar() {
  //There is a property called data in useSession that we are renaming to be called session.
  //useSession is a function from next auth that allows the user to sign in with there platform and allows me to keep the use logged in.
  const { data: session } = useSession()

  return (
    //This is responsible for styling the whole sidbar
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      {/*This is just declaring a image, styling it and getting the image from a url*/}
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      {/*This is using the component that I built SidebarRow insider this component and placing the icon and title in the fuction. The styling is done in SidebarRow*/}
      <SiderbarRow Icon={HomeIcon} title="Home" />
      <SiderbarRow Icon={HashtagIcon} title="Explore" />
      <SiderbarRow Icon={BellIcon} title="Notifications" />
      <SiderbarRow Icon={MailIcon} title="Messages" />
      <SiderbarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SiderbarRow Icon={CollectionIcon} title="Lists" />
      {/*This function uses the current session to determine if the user is logged in or out and displays it. This also allows you to sign out or sign in on a button click*/}
      {/*This is saying if there is a session display sign out and give the signOut function and if there is not a session display sign in and give the signIn function*/}
      <SiderbarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sign out' : 'Sign in'}
      />
      <SiderbarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}
// This line of code allows this function to be used in other functions
export default Sidebar
