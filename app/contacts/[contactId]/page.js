"use client";
import Card from "@/common/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
import { PLACEHOLDER_IMAGE } from "@/constants/config";
import {
  addContactIfNotExists,
  getContactById,
} from "@/redux/features/contacts/contactsSlice";
import contactService from "@/services/contactService";
import Modal from "../../../common/modal";
import searchService from "@/services/searchService";
import { useRouter } from "next/navigation";
import Status from "@/components/Status";
import Detail from "@/common/detail";
import ThumbnailProfile from "../../../common/thumbnailProfile";
const ContactDetail = (props) => {
  const { contactId } = props.params;

  const reduxContact = useSelector((state) => getContactById(state, contactId));
  const [contact, setContact] = useState(reduxContact);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactStatusHistory, setContactStatusHistory] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchContact = async (contactId) => {
    if (contactId && !reduxContact) {
      try {
        const { data } = await contactService.getContact(contactId);
        setContact(data);
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    }
  };

  const goToContact = async (id) => {
    const { data: clickedContact } = await searchService.findById(id);
    dispatch(addContactIfNotExists(clickedContact));
    router.push(`/contacts/${clickedContact.id}`);
  };

  const getContactStatusHistory = async (contactId) => {
    const { data } = await contactService.getContactStatusHistory(contactId);
    console.log(data);
    setContactStatusHistory(data);
  };

  useEffect(() => {
    fetchContact(contactId);
    getContactStatusHistory(contactId);

  }, []);

  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <h1 className="mt-5 text-3xl font-extrabold"> Contact details</h1>
      <Card
        height="h-3/4"
        width="w-3/4"
        key={contact?.id}
        customClasses="bg-blue-50 my-10"
      >
        {/* Image Section */}
        <div className="flex h-full w-full flex-col items-center lg:flex-row lg:items-stretch">
          <div className="relative m-8 cursor-pointer">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Image of ${contact?.name}`}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              priority
              unoptimized
              className="h-64 w-64 rounded-2xl"
              onClick={openModal}
            />
          </div>

          {/* Details Section */}
          <div className="m-8 flex w-2/3 flex-col justify-between text-center lg:text-left">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h2 className="my-5 text-5xl">{contact?.full_name}</h2>

              <h1 className="text-2xl font-bold">Personal Info</h1>
              {contact?.national_id && (
                <Detail title="National ID:" data={contact.national_id} />
              )}

              {contact?.gender && (
                <Detail
                  title="Gender:"
                  data={contact.gender === "m" ? "Male" : "Female"}
                />
              )}

              {contact?.dob && (
                <Detail title="Date of Birth:" data={contact.dob} />
              )}
              {contact?.status && <Status status={contact?.status} />}

              {(contact?.father || contact?.mother) && (
                <div>
                  <hr className="my-3 h-px w-48 rounded border-0 bg-gray-400" />
                  <h1 className="text-2xl font-bold">Parent Info</h1>

                  <div className="my-5 flex items-center justify-center gap-3">
                    {contact?.father && (
                      <ThumbnailProfile
                        title="Father"
                        image={contact?.father?.image}
                        details={contact.father?.name}
                        onClick={() => goToContact(contact.father.id)}
                      />
                    )}
                    {contact?.mother && (
                      <ThumbnailProfile
                        title="Mother"
                        image={contact?.mother?.image}
                        details={contact.mother?.name}
                        onClick={() => goToContact(contact.mother.id)}
                      />
                    )}
                  </div>
                </div>
              )}

              {contact?.children && (
                <div>
                  <hr className="my-3 h-px w-48 rounded border-0 bg-gray-400" />
                  <h1 className="text-2xl font-bold">Children</h1>
                  <div className="my-5 grid grid-cols-2 gap-5 lg:grid-cols-5">
                    {contact?.children.map((child) => (
                      <ThumbnailProfile
                        key={child.id}
                        image={"http://localhost:8000/" + child.image}
                        details={child.name}
                        onClick={() => goToContact(child.id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my-5 flex w-full min-w-fit flex-col items-center justify-center gap-2 lg:flex-row">
          <Button
            text="Edit Contact"
            className={` ${btnStyles.btn} ${btnStyles.bgPrimary}`}
            href={`/contacts/${contactId}/edit`}
          />
        </div>
      </Card>

      {contact?.image && (
        <Modal show={isModalOpen} onClose={closeModal}>
          <Image
            src={contact?.image}
            alt={`Full-size image of ${contact?.name}`}
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            priority
            unoptimized
            className="select-none"
          />
        </Modal>
      )}
      <h1 className="mt-5 text-3xl font-extrabold">Recent status update</h1>

      <Card
        height="h-3/4"
        width="w-3/4"
        key={contact?.id}
        customClasses="bg-blue-50 my-10"
      >
        <div className="">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-jeansBlue text-white">
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {contactStatusHistory.map((record, index) => (
                <tr key={index} className="odd:bg-white even:bg-blue-50">
                  <td className="border px-4 py-2">
                    <Status status={record.status} />
                  </td>
                  <td className="border px-4 py-2">{record.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ContactDetail;
