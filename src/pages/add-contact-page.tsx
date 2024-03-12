import { AddContactForm } from '../components/add-contact-form/add-contact-form';
import { Layout } from '../components/layout/layout';
import { ToastList } from '../components/toast/toast-list';
import { useToast } from '../helper/useToast';

export const AddContactPage = () => {
    const { toasts, removeToast, onToast } = useToast()

    return (
        <>
            <Layout title='Add Contact'>
                <AddContactForm onToast={onToast}/>
                <ToastList data={toasts} position="top-right" removeToast={removeToast} />
            </Layout>
        </>
    );
};
