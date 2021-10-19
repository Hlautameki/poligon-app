import { useState } from 'react';

import { Text } from 'Components/Text/Index';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'Components/Button/Index';

function Generator () {
  const [value, setValue] = useState<string>(uuidv4());

  const handleClick = () => {
    setValue(uuidv4());
  };

  return (
    <div>
      <Button label="Refresh" onClick={handleClick}></Button>
      <Text>{value}</Text>
    </div>
  );
}

export { Generator };