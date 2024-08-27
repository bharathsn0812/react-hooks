import React, { useRef, useEffect } from 'react';

function TextInputWithFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="This input will be focused on mount"
    />
  );
}

export default TextInputWithFocus;