import { AppBridgeContext } from "@shopify/app-bridge-react/context";
import { Heading, Page, Button } from "@shopify/polaris";
import { Redirect } from "@shopify/app-bridge/actions";
import { useContext } from "react";

export default props => {
  const polaris = useContext(AppBridgeContext);

  const redirectToProduct = () => {
    console.log("btn clicked", polaris);
    const redirect = Redirect.create(polaris);
    redirect.dispatch(Redirect.Action.APP, "/edit");
  };
  console.log("context", polaris);
  return (
    <Page>
      <Heading>Shopify app with Node and React demo v2 🎉</Heading>
      <Button onClick={redirectToProduct}>Click Me</Button>
    </Page>
  );
};
