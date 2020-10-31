package be.chesteric31.service.dto;

import java.io.Serializable;

/**
 * A DTO for the {@link be.chesteric31.domain.Strength} entity.
 */
public class StrengthDTO implements Serializable {
    
    private Long id;

    private String name;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof StrengthDTO)) {
            return false;
        }

        return id != null && id.equals(((StrengthDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "StrengthDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
