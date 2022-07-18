// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {ipc} from '../models';

export function SendMessage(arg1:ipc.SendMessageRequest):Promise<ipc.SendMessageRequest>;

export function AddNewChat(arg1:Array<ipc.User>):void;

export function GetChatById(arg1:string):Promise<ipc.Chat>;

export function GetRecentChats():Promise<Array<ipc.RecentChat>>;

export function GetUserId():Promise<string>;

export function GetUserPreferences():Promise<ipc.Preferences>;

export function GetUsers():Promise<Array<ipc.User>>;
