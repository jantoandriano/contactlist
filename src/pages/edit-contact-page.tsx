import { EditContactForm } from "../components/edit-contact-form/edit-contact-form"
import { Layout } from "../components/layout/layout"
import { ToastList } from "../components/toast/toast-list";
import { useToast } from "../helper/useToast";

export const EditPage = () => {
    const { toasts, removeToast, onToast } = useToast()

    return (
        <>
            <Layout title="Edit Contact">
                <EditContactForm onToast={onToast} />
                <ToastList data={toasts} position="top-right" removeToast={removeToast} />
            </Layout>
        </>
    )
}