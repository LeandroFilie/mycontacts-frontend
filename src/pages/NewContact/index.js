import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import useNewContact from './useNewContact';

export default function NewContact() {
  const { handleSubmit, contactFormRef } = useNewContact();

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} ref={contactFormRef} />
    </>
  );
}
