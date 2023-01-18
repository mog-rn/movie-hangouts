import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";

interface Seat {
  id: number;
  status: "available" | "taken" | "selected";
  price: number;
  row: number;
}

let availableSeat = require("../assets/seats/available.png");
let selectedSeat = require("../assets/seats/selected.png");
let takenSeat = require("../assets/seats/taken.png");

const CinemaSeats = () => {
  const [seats, setSeats] = useState<Seat[]>([
    {
      id: 1,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 2,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 3,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 4,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 5,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 6,
      status: "available",

      price: 100,
      row: 1,
    },
    {
      id: 7,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 8,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 9,
      status: "available",
      price: 100,

      row: 1,
    },
    {
      id: 10,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 11,
      status: "available",
      price: 100,
      row: 1,
    },
    {
      id: 12,
      status: "available",
      price: 100,
      row: 1,
    },
  ]);

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
 
  const onSeatPress = (index: number) => {
    const updatedSeats = [...seats];
    const updatedSelectedSeats = [...selectedSeats];
    const seatsPerRow = 6;
    const seatIndex = index + Math.floor(index / seatsPerRow) * seatsPerRow;
    
    if (updatedSeats[seatIndex].status === "available") {
      updatedSeats[seatIndex].status = "selected";
      updatedSelectedSeats.push(updatedSeats[seatIndex].id);
    } else if (updatedSeats[seatIndex].status === "selected") {
      updatedSeats[seatIndex].status = "available";
      updatedSelectedSeats.splice(
        updatedSelectedSeats.indexOf(updatedSeats[seatIndex].id),
        1
      );
    }
    
    setSeats(updatedSeats);
    setSelectedSeats(updatedSelectedSeats);
  
    console.log("selectedSeats", selectedSeats);
  };

  return (
    <View className="flex flex-col">
      {seats
        .reduce((row, seat, index) => {
          if (index % 6 === 0) {
            row.push([]);
          }
          row[row.length - 1].push(seat);
          return row;
        }, [] as Seat[][])
        .map((row, index) => (
          <View className="flex flex-row" key={index}>
            {row.map((seat, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onSeatPress(index)}
                className="flex flex-col px-2 items-center"
              >
                <Image
                  source={
                    seat.status === "available"
                      ? availableSeat
                      : seat.status === "selected"
                      ? selectedSeat
                      : takenSeat
                  }
                  className="w-10 h-6"
                />
                <Text>{seat.id}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
    </View>
  );
};

export default CinemaSeats;
