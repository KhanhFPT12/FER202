// MultiFieldForm.js
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function MultiFieldForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const valid = name.trim() !== "" && gender !== "" && selectedOption !== "" && agreed;
    setIsFormValid(valid);
  }, [name, gender, selectedOption, agreed]);

  return (
    <Form className="p-3">
      <Form.Group>
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={name.trim() === ""}
        />
        <Form.Control.Feedback type="invalid">
          Tên không được để trống
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            label="Nam"
            type="radio"
            value="Nam"
            name="gender"
            checked={gender === "Nam"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Nữ"
            type="radio"
            value="Nữ"
            name="gender"
            checked={gender === "Nữ"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Chọn ngành học</Form.Label>
        <Form.Select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          isInvalid={selectedOption === ""}
        >
          <option value="">--Chọn ngành--</option>
          <option value="CNTT">Công nghệ thông tin</option>
          <option value="Kinh tế">Kinh tế</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Vui lòng chọn một ngành học
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default MultiFieldForm;
