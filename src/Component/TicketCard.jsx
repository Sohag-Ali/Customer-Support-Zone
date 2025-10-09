import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const TicketCard = ({data, handleCardClick}) => {
    return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="cursor-pointer"
                    onClick={() => handleCardClick(ticket)}
                  >
                    <div className="bg-white rounded-lg shadow p-4 border border-gray-100 hover:bg-green-50 hover:shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <div><h3 className="font-medium text-lg text-[#001931]">
                          {ticket.title}
                        </h3></div>
                        
                        <div className={`flex gap-1 items-center justify-center px-2 py-1 rounded-full ${
                            ticket.status === "Open"
                              ? "bg-[#B9F8CF] text-[#0B5E06]"
                              : ticket.status === "In-Progress"
                              ? "bg-[#F8F3B9] text-[#9C7700]"
                              : "bg-gray-400"
                          }`}>
                            
                                
                            <p className={`w-3 h-3  ${
                            ticket.status === "Open"
                              ? "bg-green-600"
                              : ticket.status === "In-Progress"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                          } rounded-full`}></p>
                        <p 
                        >
                          {ticket.status}
                        
                            </p>
                        </div>
                        
                        
                      </div>

                      <p className=" text-[#627382] mb-3">
                        {ticket.description}
                      </p>

                      <div className="flex justify-between items-center text-sm text-[#627382]">
                        <div className="flex items-center gap-4">
                          <p>{`#${ticket.id}`}</p>
                          <p
                            className={`${
                              ticket.priority === "HIGH PRIORITY"
                                ? "text-red-500"
                                : ticket.priority === "MEDIUM PRIORITY"
                                ? "text-yellow-500"
                                : "text-green-500"
                            } font-semibold`}
                          >
                            {ticket.priority}
                          </p>
                        </div>
                        <div className="text-right text-sm text-[#627382] flex gap-4">
                          <p>{ticket.customer}</p>
                          <p>
                              <FontAwesomeIcon icon={faCalendarAlt} className=" text-gray-500" />
                              <span>{ticket.createdAt}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    );
};

export default TicketCard;