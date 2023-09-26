import React from 'react'
import image from '../../assets/images/groupimage.jpg'
import { Avatar } from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useSelector } from 'react-redux';
import { getSender } from '../../helper/Reusable';

export default function ChatTitle({openChatModel}) {

  const data=useSelector((state)=>state.chat.activeChat);

  if(data===null)
  return <></>

  const isGroupChat=data.isGroupChat;
  let user;
  if(isGroupChat)
  {
    user={name:data.chatName}
  }
  else{
    user=getSender(data.users);
  }

  return (
    <div className='flex flex-row px-[5%] box-border justify-between w-[100%]'>
        <div className='flex flex-row'>
        <Avatar referrerPolicy="no-referrer" alt="Group-pic" sx={{width:48,height:48}} src={user.pic}></Avatar>
        <div className='flex flex-col ml-3'>
         <div className='text-xl font-Roboto font-semibold'>{user.name}</div>
         <div className="text-xs font-normal  text-[#30C730]">Mamy is typing...</div>
        </div>
        </div>
        <div onClick={openChatModel}>
            <MoreHorizOutlinedIcon style={{cursor:"pointer"}} color="action" ></MoreHorizOutlinedIcon>
        </div>
    </div>
  )
}
