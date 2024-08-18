import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { getTransactionsAction } from "../redux/transaction/transactionActions";
import TopNavbar from "../components/topNavbar";
import TransactionTable from "../components/transactionTable";
import TransactionForm from "../components/transactionForms";

const TransactionPage = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsAction(user._id));
  }, [dispatch, user._id]);

  return (
    <Container>
      <TopNavbar userName={user.name} />

      {/* Transaction Form */}
      <TransactionForm userId={user._id} />
      {/* Transaction Table */}
      <TransactionTable />
    </Container>
  );
};

export default TransactionPage;
