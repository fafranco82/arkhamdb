<?php 

namespace AppBundle\Repository;

class ScenarioRepository extends TranslatableRepository
{
	function __construct($entityManager)
	{
		parent::__construct($entityManager, $entityManager->getClassMetadata('AppBundle\Entity\Scenario'));
	}
}