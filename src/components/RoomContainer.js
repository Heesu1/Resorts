import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

//wrapped container with room container
function RoomContainer({context}){
const{loading,sortedRooms,rooms}=context;

  if (loading) {
    return <Loading />
  }
  return (
    <>

      <RoomsFilter rooms={sortedRooms} />
      <RoomsList rooms={rooms} />
    </>
  )

}
export default withRoomConsumer(RoomContainer)



/* import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        
        if(loading){
         return <Loading/>
        }
        return (
        <div>
          Hello from Rooms Container
          <RoomsFilter rooms={sortedRooms}/>
          <RoomsList rooms={rooms} />
        </div>)
      }}
    </RoomConsumer>
  );
}
 */