import { useState } from 'react';
import Card from './components/Card';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Modal from './components/modal';
import { Button } from 'flowbite-react';
import SimpleForm from './forms/simpleForm';
import AddProductForm from './forms/addProduct';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoIosCloseCircleOutline
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            {/* <SimpleForm /> */}

            <AddProductForm />
          </div>
        </Modal>
      ) : null}
      <div className="border-b-2 border-black">
        <Button className="m-4" onClick={() => setOpenModal(true)}>
          Add new product
        </Button>
      </div>
      <Card />
    </div>
  );
}

export default App;
