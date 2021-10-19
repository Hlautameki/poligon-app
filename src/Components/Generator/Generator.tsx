import { useState } from 'react';

import { Text } from 'Components/Text/Index';
import { v4 as uuidv4 } from 'uuid';

function Generator () {
  const [value, setValue] = useState<string>(uuidv4());

  const handleClick = () => {
    setValue(uuidv4());
  };

  return (
    <div>
      <button onClick={handleClick}>Refresh</button>
      <Text>{value}</Text>
    </div>
  );
}

export { Generator };