import { useState, useContext, FormEvent, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { GlobalContext, IEvents } from "../../context/GlobalContext";
import { CloseModalButton, InputBox, ModalForm, ModalOverlay } from "./styles";

interface IModalProps {
  closeModal: () => void;
  showMessage: (message: string) => void;
}

interface FormErrors {
  name: {
    hasError: boolean,
    message: string;
  };
  date: {
    hasError: boolean,
    message: string;
  };
}

export const Modal: React.FC<IModalProps> = ({ closeModal, showMessage }) => {
  const { currentDate, setEvents, selectedEvent, setSelectedEvent } = useContext(GlobalContext);

  const [ name, setName ] = useState<string>(selectedEvent?.name || '');
  const [ description, setDescription ] = useState<string>(selectedEvent?.description || '');
  const [ errors, setErrors ] = useState<FormErrors>({
    name: {
      hasError: false,
      message: ''
    },
    date: {
      hasError: false,
      message: ''
    }
  });

  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) dateRef.current.valueAsDate = currentDate;
  }, [ dateRef.current ]);

  function validateForm(): FormErrors {
    const errors: FormErrors = {
      name: {
        hasError: false,
        message: ''
      },
      date: {
        hasError: false,
        message: ''
      }
    };

    if (name == '') {
      errors.name.hasError = true;
      errors.name.message = 'Insira um título para seu evento';
    }

    if (name.length < 3) {
      errors.name.hasError = true;
      errors.name.message = 'O nome do evento deve ter no mínimo 3 caracteres';
    }

    if (dateRef.current?.value == '') {
      errors.date.hasError = true;
      errors.date.message = 'Insira uma data para seu evento';
    }

    return errors;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const errorsInForm = validateForm();

    if (errorsInForm.name.hasError || errorsInForm.date.hasError) {
      setErrors(errorsInForm);
      return;
    }

    // Create an event

    const dateFromInput = dateRef.current?.valueAsDate!;

    const correctDayFormat: [ number, number, number ] = [
      dateFromInput.getFullYear(),
      dateFromInput.getMonth(),
      dateFromInput.getDate() + 1,
    ];

    const newOrEditedEvent: IEvents = {
      id: selectedEvent?.id || v4(),
      name: name,
      description: description,
      date: new Date(...correctDayFormat)
    };

    setEvents(prevEvents => {
      if (selectedEvent) {
        return prevEvents.map(event => event.id == selectedEvent.id ? newOrEditedEvent : event);
      }

      return [
        ...prevEvents,
        newOrEditedEvent
      ];
    });

    const message = selectedEvent ? 'Event succesfully edited' : 'Event succesfully created';

    showMessage(message);
    return closeModal();
  }

  function formatDateToInputDate(date: Date): string {
    const [ day, month, year ] = date.toLocaleDateString().split('/');

    return `
    ${year}-${month.padStart(2, '0')}-${day.padStart(2), '0'}
    `;
  }

  useEffect(() => {
    if (errors.name.hasError) {
      if (name != '' && name.length >= 3) {
        setErrors({
          ...errors,
          name: {
            hasError: false,
            message: ''
          }
        });
      }
    }

    if (errors.date.hasError) {
      if (dateRef.current?.value != '') {
        setErrors({
          ...errors,
          date: {
            hasError: false,
            message: ''
          }
        });
      }
    }

  }, [ name, dateRef.current?.value ]);

  // Set the selected event to null when
  // dismount
  useEffect(() => {
    return () => {
      setSelectedEvent(null);
    };
  }, []);

  return (
    <ModalOverlay>
      <ModalForm onSubmit={handleSubmit} style={{ position: 'relative' }}>
        <CloseModalButton
          onClick={closeModal}
        >
          X
        </CloseModalButton>
        <header>
          <h4>Create your new event</h4>
        </header>
        <main>
          <label htmlFor="nameFormInput">Name</label>
          <InputBox hasError={errors.name.hasError}>
            <input
              id="nameFormInput"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            {errors.name.hasError && <span>{errors.name.message}</span>}
          </InputBox>

          <label htmlFor="descriptionFormInput">Description</label>
          <InputBox hasError={false}>
            <input
              id="descriptionFormInput"
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </InputBox>

          <label htmlFor="dateFormInput">Date</label>
          <InputBox hasError={errors.date.hasError}>
            <input
              ref={dateRef}
              id="dateFormInput"
              type="date"
              defaultValue={formatDateToInputDate(currentDate)}
              required
            />
            {errors.date.hasError && <span>{errors.date.message}</span>}
          </InputBox>
        </main>
        <footer>
          <button type="submit">{selectedEvent ? 'Edit' : 'Create'}</button>
        </footer>
      </ModalForm>
    </ModalOverlay>
  );
};
