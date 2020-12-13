import * as React from "react";
import { AddCarSuccess } from "../components/add-car-succes";
import { AddNewCar } from "../components/add-new-car";
import { Heading } from "../components/elements/heading/heading";
import { PageContent } from "../components/elements/page-content/page-content";
import { SubMenu } from "../components/elements/sub-menu/sub-menu";
import { RequestState } from "../enums";

export const AddCar: React.FC = () => {
  const [
    createNewCarRequest,
    setCreateNewCarRequest,
  ] = React.useState<RequestState>(RequestState.INIT);
  return (
    <main>
      <SubMenu>
        <Heading>Add new car</Heading>
      </SubMenu>
      <PageContent>
        {createNewCarRequest !== RequestState.SUCCESS && (
          <AddNewCar
            requestState={createNewCarRequest}
            setRequestState={setCreateNewCarRequest}
          />
        )}
        {createNewCarRequest === RequestState.SUCCESS && (
          <AddCarSuccess
            renderAddCar={() => setCreateNewCarRequest(RequestState.INIT)}
          />
        )}
      </PageContent>
    </main>
  );
};
